import { motion } from "framer-motion"

const Main = ({ onCreate }: { onCreate: () => void }) => {
    return (
         <motion.div
      className="relative overflow-hidden h-screen m-4 lg:m-8 "
      whileHover="hover"
    >

            {/* Background decorative orbs */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                initial={false}
                whileHover="hover"
            >
                {/* Orb 1 */}
                <motion.div
                    variants={{
                        hover: { x: -30, y: -20 },
                    }}
                    transition={{ type: "spring", stiffness: 40 }}
                    className="absolute top-24 left-24 w-20 h-20 rounded-full 
                     bg-blue-500/30 "
                />

                {/* Orb 2 */}
                <motion.div
                    variants={{
                        hover: { x: 40, y: 20 },
                    }}
                    transition={{ type: "spring", stiffness: 40 }}
                    className="absolute top-1/2 left-1/3 w-30 h-30 rounded-full 
                     bg-blue-400/20 "
                />

                {/* Orb 3 */}
                <motion.div
                    variants={{
                        hover: { x: -20, y: 30 },
                    }}
                    transition={{ type: "spring", stiffness: 40 }}
                    className="absolute bottom-24 right-42 w-40 h-40 rounded-full 
                     bg-blue-600/20 "
                />
                {/* Orb 3 */}
                <motion.div
                    variants={{
                        hover: { x: -20, y: 30 },
                    }}
                    transition={{ type: "spring", stiffness: 40 }}
                    className="absolute top-24 right-32 w-40 h-40 rounded-full 
                     bg-blue-500/20 "
                />
                {/* Orb 3 */}
                <motion.div
                    variants={{
                        hover: { x: -20, y: 30 },
                    }}
                    transition={{ type: "spring", stiffness: 40 }}
                    className="absolute top-4 left-150 w-50 h-50 rounded-full 
                     bg-blue-600/20 "
                />

                <motion.div
                    variants={{
                        hover: { x: -20, y: 30 },
                    }}
                    transition={{ type: "spring", stiffness: 40 }}
                    className="absolute bottom-4 left-40 w-30 h-30 rounded-full 
                     bg-blue-600/20 "
                />

            </motion.div>

            <div className="flex items-center justify-around gap-2 py-16 h-screen">
                {/* Text section */}
                <motion.div
                    className="max-w-xl"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-semibold leading-tight mb-4">
                        Create{" "}
                        <motion.span
                            className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-bold inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            invoices
                        </motion.span>{" "}
                        that are simple, clean, and reliable
                    </h1>

                    <p className="text-base text-gray-600 mb-6 hidden md:block">
                        A flexible platform to{" "}
                        <span className="font-medium text-gray-800">
                            generate, customize, and download
                        </span>{" "}
                        internet bills for any provider or customer — without unnecessary
                        complexity.
                    </p>

                    <div className="flex gap-4">
                        <motion.button
                        onClick={onCreate}
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-3 lg:px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                        >
                            Create Invoice
                        </motion.button>

                        {/* <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
          >
            View Sample
          </motion.button> */}
                    </div>
                </motion.div>

                {/* Image section */}
                <motion.img
                    src="invoice.webp"
                    alt="Invoice preview"
                    className="w-[500px] shadow-none"
                    whileHover={{
                        //   y: -6,
                        scale: 1.02,
                        //   boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                />
            </div>
        </motion.div>
    )
}

export default Main
