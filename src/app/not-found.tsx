import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">404</h1>
      <p className="text-lg md:text-xl text-foreground/80 mb-8">Page not found</p>
      <Link href="/" className="px-6 py-3 bg-primary hover:bg-primary/90 text-foreground rounded-lg transition-colors duration-300">
        Go back home
      </Link>
    </div>
  );
}
