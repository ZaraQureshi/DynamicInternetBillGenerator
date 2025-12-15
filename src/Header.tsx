import React, { useState } from "react";
import { Button } from "./components/ui/button";

// BillGrill Theme‑Agnostic UI
// -------------------------------------------------
// How to use:
// 1) Add this file as `src/App.tsx` in a Vite + React + TypeScript project.
// 2) Install TailwindCSS and shadcn/ui per their docs. This code assumes
//    shadcn components are available at `@/components/ui/*` (you can replace
//    them with your own component imports).
// 3) Add the CSS snippet shown below into `src/index.css` (or your global CSS).
// 4) Start the dev server (vite) and enjoy a theme‑agnostic UI where colors
//    are driven by CSS variables and can be swapped by toggling `data-theme`.




// Sidebar component
// function Sidebar({ collapsed = false }: { collapsed?: boolean }) {
//   return (
//     <aside className={`w-72 ${collapsed ? 'hidden' : 'block'} h-screen p-6 bg-app border-r border-subtle`}> 
//       <div className="mb-8">
//         <h1 className="text-xl font-semibold text-app">BillGrill</h1>
//         <p className="text-sm text-muted">Invoice generator</p>
//       </div>

//       <nav className="space-y-2">
//         {['Dashboard', 'Create', 'Templates', 'My Invoices', 'Settings'].map((item) => (
//           <a key={item} href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[rgba(var(--muted)/.6)]">
//             <span className="w-6 h-6 rounded-md bg-[rgba(var(--primary)/.12)] flex items-center justify-center text-sm">📄</span>
//             <span className="text-app">{item}</span>
//           </a>
//         ))}
//       </nav>

//       <div className="mt-auto pt-6">
//         <div className="text-sm text-muted mb-2">Workspaces</div>
//         <div className="flex gap-2">
//           <div className="flex-1 card p-2 text-sm text-app">Personal</div>
//           <div className="p-2 rounded-md border border-subtle text-sm text-muted">+</div>
//         </div>
//       </div>
//     </aside>
//   );
// }

// Header with theme toggle
// import { Button } from "./components/ui/button";

export default function Header({onCreate}: {onCreate: () => void}) {
  return (
    <header className="sticky w-full top-0 z-50  border-b border-border bg-background/80 backdrop-blur">
      <div className="flex h-16  items-center justify-between px-6">
        
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            Bill<span className="text-primary">Generator</span>
          </span>
          <span className="hidden sm:block text-sm text-muted-foreground">
            Create professional invoices
          </span>
        </div>

        <div className="flex items-center gap-3">
         

          <Button className="px-6 lg:px-12" onClick={onCreate}>
            + Create Invoice
          </Button>
        </div>
      </div>
    </header>
  );
}


// // Small dashboard cards
// function StatCard({ title, value }: { title: string; value: string }) {
//   return (
//     <Card className="shadow-soft">
//       <div className="text-sm text-muted">{title}</div>
//       <div className="text-2xl font-semibold text-app">{value}</div>
//     </Card>
//   );
// }

// // Invoice editor skeleton
// function InvoiceEditor() {
//   return (
//     <div className="grid grid-cols-12 gap-6">
//       <div className="col-span-4">
//         <div className="space-y-4">
//           <Card>
//             <h3 className="text-sm font-medium text-app mb-2">Business Details</h3>
//             <input className="w-full mb-2 px-3 py-2 rounded-md border border-subtle" placeholder="Business name" />
//             <input className="w-full mb-2 px-3 py-2 rounded-md border border-subtle" placeholder="Email" />
//             <input className="w-full mb-2 px-3 py-2 rounded-md border border-subtle" placeholder="Phone" />
//             <Button className="mt-2 btn-primary w-full">Upload Logo</Button>
//           </Card>

//           <Card>
//             <h3 className="text-sm font-medium text-app mb-2">Client Details</h3>
//             <input className="w-full mb-2 px-3 py-2 rounded-md border border-subtle" placeholder="Client name" />
//             <input className="w-full mb-2 px-3 py-2 rounded-md border border-subtle" placeholder="Client email" />
//           </Card>

//           <Card>
//             <h3 className="text-sm font-medium text-app mb-2">Template</h3>
//             <select className="w-full px-3 py-2 rounded-md border border-subtle">
//               <option>Modern</option>
//               <option>Classic</option>
//               <option>Minimal</option>
//             </select>
//             <div className="mt-3 text-sm text-muted">Primary color</div>
//             <input type="color" className="mt-2 w-full h-10 p-0 border-0" defaultValue="#2563eb" />
//           </Card>
//         </div>
//       </div>

//       <div className="col-span-8">
//         <Card className="h-full">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold text-app">Invoice Preview</h3>
//             <div className="flex items-center gap-2">
//               <Button className="px-3 py-1 border border-subtle">Download PDF</Button>
//               <Button className="btn-primary">Save</Button>
//             </div>
//           </div>

//           <div className="bg-[rgba(var(--muted)/.6)] rounded-lg p-6">
//             <div className="flex items-start justify-between mb-6">
//               <div>
//                 <div className="text-sm text-muted">From</div>
//                 <div className="text-app font-medium">Your Business</div>
//                 <div className="text-sm text-muted">Address • City</div>
//               </div>

//               <div className="text-right">
//                 <div className="text-sm text-muted">Invoice #</div>
//                 <div className="text-app font-medium">INV-001</div>
//                 <div className="text-sm text-muted">Due: Jan 10, 2025</div>
//               </div>
//             </div>

//             <table className="w-full text-left mb-6 border-collapse">
//               <thead>
//                 <tr className="text-sm text-muted">
//                   <th className="pb-2">Item</th>
//                   <th className="pb-2">Qty</th>
//                   <th className="pb-2">Rate</th>
//                   <th className="pb-2 text-right">Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[1, 2].map((i) => (
//                   <tr key={i} className="text-app border-t border-subtle">
//                     <td className="py-3">Service {i}</td>
//                     <td className="py-3">1</td>
//                     <td className="py-3">$100</td>
//                     <td className="py-3 text-right">$100</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <div className="flex justify-end">
//               <div className="w-64">
//                 <div className="flex justify-between text-sm text-muted mb-2">
//                   <div>Subtotal</div>
//                   <div className="text-app">$200</div>
//                 </div>
//                 <div className="flex justify-between text-sm text-muted mb-2">
//                   <div>Tax</div>
//                   <div className="text-app">$0</div>
//                 </div>
//                 <div className="flex justify-between text-lg font-semibold text-app">
//                   <div>Total</div>
//                   <div>$200</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

// // Templates gallery skeleton
// function TemplatesGallery() {
//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {['Retail', 'Service', 'Rent'].map((t) => (
//         <Card key={t} className="text-center">
//           <div className="h-40 mb-3 bg-[rgba(var(--muted)/.45)] rounded-lg flex items-center justify-center">Preview</div>
//           <div className="font-medium text-app">{t} Invoice</div>
//           <div className="text-sm text-muted mt-2">A clean {t.toLowerCase()} invoice template.</div>
//           <div className="mt-3">
//             <Button className="px-3 py-1 border border-subtle mr-2">Preview</Button>
//             <Button className="btn-primary">Use</Button>
//           </div>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('system');

//   React.useEffect(() => {
//     if (theme === 'system') {
//       document.documentElement.removeAttribute('data-theme');
//     } else {
//       document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
//     }
//   }, [theme]);

//   return (
//     <div className="min-h-screen bg-app text-app p-6">
//       <div className="flex h-[88vh] rounded-2xl overflow-hidden shadow-soft">
//         <Sidebar />

//         <div className="flex-1 flex flex-col">
//           <Header theme={theme} setTheme={(t) => setTheme(t as any)} />

//           <main className="p-6 overflow-auto">
//             <div className="grid grid-cols-12 gap-6 mb-6">
//               <div className="col-span-3">
//                 <StatCard title="Total Revenue" value="$28.2k" />
//               </div>
//               <div className="col-span-3">
//                 <StatCard title="Active Customers" value="57" />
//               </div>
//               <div className="col-span-3">
//                 <StatCard title="Pending Bills" value="12" />
//               </div>
//               <div className="col-span-3">
//                 <Card className="flex items-center justify-between">
//                   <div>
//                     <div className="text-sm text-muted">Templates</div>
//                     <div className="text-app font-medium">3 ready</div>
//                   </div>
//                   <Button className="btn-primary">Browse</Button>
//                 </Card>
//               </div>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-lg font-semibold text-app mb-3">Create Invoice</h3>
//               <InvoiceEditor />
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-app mb-3">Templates</h3>
//               <TemplatesGallery />
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }
