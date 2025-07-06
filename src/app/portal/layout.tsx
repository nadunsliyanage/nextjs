export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <div className="min-h-screen items-center justify-center bg-gray-100 p-4">
          <h1 className="text-2xl font-bold mb-4">Portal</h1>
          <main>{children}</main>
        </div>
    </>
  )
}