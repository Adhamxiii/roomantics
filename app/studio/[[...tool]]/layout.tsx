export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative z-20">
      <div>{children}</div>
    </main>
  );
}
