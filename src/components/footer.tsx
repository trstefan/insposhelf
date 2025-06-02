import Link from "next/link";
import { Heart, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-purple-500 to-pink-500" />
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                InspoShelf
              </span>
            </div>
            <p className="text-sm font-semibold text-muted-foreground max-w-xs">
              Curating beautiful inspiration for creative minds.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 font-semibold">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="h-9 w-9 rounded-lg bg-muted hover:bg-accent transition-colors flex items-center justify-center group"
              >
                <Github className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-lg bg-muted hover:bg-accent transition-colors flex items-center justify-center group"
              >
                <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-lg bg-muted hover:bg-accent transition-colors flex items-center justify-center group"
              >
                <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 font-semibold">
          <p className="text-sm text-muted-foreground">
            © {currentYear} InspoShelf. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for
            creators
          </p>
        </div>
      </div>
    </footer>
  );
}
