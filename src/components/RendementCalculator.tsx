"use client";

import { useState, useMemo } from "react";

interface YearRow {
  year: number;
  totalInvested: number;
  value: number;
}

function formatEuro(amount: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function calculate(
  eenmalig: number,
  maandelijks: number,
  rendement: number,
  jaren: number,
): { totaalIngelegd: number; totaalIngelegdInclStart: number; eindwaarde: number; rows: YearRow[] } {
  const maandRente = rendement / 100 / 12;
  const maanden = jaren * 12;

  let waarde = eenmalig;
  const rows: YearRow[] = [];

  for (let m = 1; m <= maanden; m++) {
    waarde = waarde * (1 + maandRente) + maandelijks;
    if (m % 12 === 0) {
      const jaar = m / 12;
      const totaalIngelegd = maandelijks * m;
      rows.push({
        year: jaar,
        totalInvested: totaalIngelegd,
        value: waarde,
      });
    }
  }

  const totaalIngelegd = maandelijks * maanden;
  const totaalIngelegdInclStart = totaalIngelegd + eenmalig;

  return { totaalIngelegd, totaalIngelegdInclStart, eindwaarde: waarde, rows };
}

export default function RendementCalculator() {
  const [eenmalig, setEenmalig] = useState(4000);
  const [rendement, setRendement] = useState(5);
  const [jaren, setJaren] = useState(10);
  const [maandelijks, setMaandelijks] = useState(100);
  const [submitted, setSubmitted] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    return calculate(eenmalig, maandelijks, rendement, jaren);
  }, [submitted, eenmalig, maandelijks, rendement, jaren]);

  function handleReset() {
    setEenmalig(4000);
    setRendement(5);
    setJaren(10);
    setMaandelijks(100);
    setSubmitted(false);
    setShowTable(false);
  }

  // For the chart, compute data points
  const chartData = useMemo(() => {
    const res = calculate(eenmalig, maandelijks, rendement, jaren);
    return res.rows;
  }, [eenmalig, maandelijks, rendement, jaren]);

  // SVG chart dimensions
  const chartW = 600;
  const chartH = 220;
  const padL = 70;
  const padR = 20;
  const padT = 20;
  const padB = 40;
  const innerW = chartW - padL - padR;
  const innerH = chartH - padT - padB;

  const maxVal = Math.max(...chartData.map((r) => r.value), 1);
  const minVal = 0;

  function toX(i: number) {
    return padL + (i / (chartData.length - 1 || 1)) * innerW;
  }
  function toY(val: number) {
    return padT + innerH - ((val - minVal) / (maxVal - minVal || 1)) * innerH;
  }

  const valuePath = chartData
    .map((r, i) => `${i === 0 ? "M" : "L"}${toX(i).toFixed(1)},${toY(r.value).toFixed(1)}`)
    .join(" ");
  const investedPath = chartData
    .map((r, i) => `${i === 0 ? "M" : "L"}${toX(i).toFixed(1)},${toY(r.totalInvested + eenmalig).toFixed(1)}`)
    .join(" ");

  // Y-axis ticks
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((f) => ({
    val: minVal + f * maxVal,
    y: toY(minVal + f * maxVal),
  }));

  // X-axis ticks (years)
  const xTicks = chartData.filter((_, i) => {
    const step = jaren <= 10 ? 1 : jaren <= 20 ? 2 : 5;
    return (i + 1) % step === 0;
  });

  return (
    <div className="my-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Inputs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-[#211f54]">
            Eenmalige inleg (€)
          </label>
          <input
            type="number"
            min={0}
            value={eenmalig}
            onChange={(e) => { setEenmalig(Number(e.target.value)); setSubmitted(false); }}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#0e3065] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#211f54]">
            Rendementspercentage p.j. (%)
          </label>
          <input
            type="number"
            min={0}
            max={100}
            step={0.1}
            value={rendement}
            onChange={(e) => { setRendement(Number(e.target.value)); setSubmitted(false); }}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#0e3065] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#211f54]">
            Aantal jaren (jaar)
          </label>
          <input
            type="number"
            min={1}
            max={50}
            value={jaren}
            onChange={(e) => { setJaren(Number(e.target.value)); setSubmitted(false); }}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#0e3065] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#211f54]">
            Maandelijkse inleg (€)
          </label>
          <input
            type="number"
            min={0}
            value={maandelijks}
            onChange={(e) => { setMaandelijks(Number(e.target.value)); setSubmitted(false); }}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#0e3065] focus:outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">
        <button
          onClick={() => setSubmitted(true)}
          className="rounded-lg bg-[#0e3065] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0c2a55]"
        >
          Bereken
        </button>
        <button
          onClick={handleReset}
          className="rounded-lg border border-[#0e3065] px-6 py-2.5 text-sm font-semibold text-[#0e3065] transition hover:bg-[#f7f9ff]"
        >
          Reset
        </button>
      </div>

      {/* Results */}
      {result && (
        <>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-[#0e3065] p-5 text-white">
              <p className="text-xs font-medium uppercase tracking-wide opacity-75">
                Totaal ingelegd
              </p>
              <p className="mt-2 text-2xl font-bold">
                {formatEuro(result.totaalIngelegd)}
              </p>
            </div>
            <div className="rounded-xl bg-[#0e3065] p-5 text-white">
              <p className="text-xs font-medium uppercase tracking-wide opacity-75">
                Totaal ingelegd + start
              </p>
              <p className="mt-2 text-2xl font-bold">
                {formatEuro(result.totaalIngelegdInclStart)}
              </p>
            </div>
            <div className="rounded-xl bg-[#0e3065] p-5 text-white">
              <p className="text-xs font-medium uppercase tracking-wide opacity-75">
                Totale geschatte waarde
              </p>
              <p className="mt-2 text-2xl font-bold">
                {formatEuro(result.eindwaarde)}
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold text-[#211f54]">
              Samengestelde rentegrafiek
            </p>
            <div className="overflow-x-auto">
              <svg
                viewBox={`0 0 ${chartW} ${chartH}`}
                className="w-full"
                style={{ minWidth: 320 }}
              >
                {/* Grid lines */}
                {yTicks.map((t, i) => (
                  <g key={i}>
                    <line
                      x1={padL}
                      y1={t.y}
                      x2={chartW - padR}
                      y2={t.y}
                      stroke="#e5e7eb"
                      strokeWidth={1}
                    />
                    <text
                      x={padL - 6}
                      y={t.y + 4}
                      textAnchor="end"
                      fontSize={10}
                      fill="#9ca3af"
                    >
                      {t.val >= 1000
                        ? `€${(t.val / 1000).toFixed(0)}k`
                        : `€${t.val.toFixed(0)}`}
                    </text>
                  </g>
                ))}

                {/* X-axis ticks */}
                {xTicks.map((r, i) => {
                  const idx = chartData.findIndex((d) => d.year === r.year);
                  return (
                    <text
                      key={i}
                      x={toX(idx)}
                      y={chartH - padB + 16}
                      textAnchor="middle"
                      fontSize={10}
                      fill="#9ca3af"
                    >
                      {r.year}j
                    </text>
                  );
                })}

                {/* Lines */}
                <path
                  d={investedPath}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth={2}
                />
                <path
                  d={valuePath}
                  fill="none"
                  stroke="#0e3065"
                  strokeWidth={2.5}
                />
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-2 flex gap-5 text-xs text-[#4a5568]">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-6 rounded bg-[#0e3065]" />
                Totale waarde
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-6 rounded bg-[#cbd5e1]" />
                Totaal ingelegd
              </span>
            </div>
          </div>

          {/* Expandable table */}
          <div className="mt-6">
            <button
              onClick={() => setShowTable((v) => !v)}
              className="text-sm font-medium text-[#17468f] underline hover:opacity-80"
            >
              {showTable ? "Verberg tabel" : "Toon tabel (jaar-op-jaar)"}
            </button>
            {showTable && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="pb-2 text-left font-semibold text-[#211f54]">Jaar</th>
                      <th className="pb-2 text-right font-semibold text-[#211f54]">Totaal ingelegd</th>
                      <th className="pb-2 text-right font-semibold text-[#211f54]">Geschatte waarde</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.rows.map((row) => (
                      <tr key={row.year} className="border-b border-gray-100">
                        <td className="py-1.5 text-[#4a5568]">{row.year}</td>
                        <td className="py-1.5 text-right text-[#4a5568]">
                          {formatEuro(row.totalInvested + eenmalig)}
                        </td>
                        <td className="py-1.5 text-right text-[#4a5568]">
                          {formatEuro(row.value)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-xs leading-relaxed text-[#9ca3af]">
            Dit is een vereenvoudigde berekening met maandelijkse samengestelde
            rente. De uitkomsten zijn indicatief en geen garantie voor toekomstig
            rendement. Beleggen brengt risico&apos;s met zich mee; je kunt (een
            deel van) je inleg verliezen.
          </p>
        </>
      )}
    </div>
  );
}
