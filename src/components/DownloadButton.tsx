"use client";

import { useDownloadModal } from "@/components/DownloadModal";

interface DownloadButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function DownloadButton({ className, children }: DownloadButtonProps) {
  const { openModal } = useDownloadModal();

  return (
    <button onClick={openModal} className={className}>
      {children ?? "Download de app"}
    </button>
  );
}
