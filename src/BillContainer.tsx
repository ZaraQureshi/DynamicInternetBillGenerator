import { Card } from "./components/ui/card";
import Bill from "./Bill";
import Form from "./Form";

const BillContainer = () => {
    return (
        // <div className="bill-container">
        <section className="relative overflow-hidden">
            {/* Blue background with diagonal top */}
            <div
                className="
          bg-blue-300
          text-white
          pt-32
          pb-24
          clip-diagonal
        "
            >
                <h1 className="text-4xl text-center font-bold leading-tight mb-4">
                    Create <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-bold inline-block">Invoice</span>
                </h1>

                <div className="app-container grid gap-4 m-3 lg:m-8 ">
                    <Card >
                        <Form />
                    </Card>
                    <Card>
                        <Bill />
                    </Card>
                </div>
            </div>
        </section>
        // </div>
    );
}

export default BillContainer;