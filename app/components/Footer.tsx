import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
              vegapro.ai
            </div>
            {/* <p className="text-gray-400 text-sm">
              We believe in driving innovation at the speed of thought
            </p> */}
          </div>
          {/* {["Product", "Company", "Resources", "Legal"].map((section) => (
            <div key={section}>
              <h3 className="font-semibold mb-4">{section}</h3>
              <ul className="space-y-2">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Link {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
        <div className="h-[1px] bg-purple-600"></div>
        <p className="text-gray-400 text-sm pt-4">
          © 2025 VegaPro.ai Pvt.Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
