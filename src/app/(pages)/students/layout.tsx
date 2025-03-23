import React from 'react';

export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-blueprint-50">
      <div className="content container relative flex flex-col space-y-24 pb-24">
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
}
