import { use } from "react";
import { InvoiceFormValues } from "./lib/InvoiceSchema";
import { useData } from "./DataContext";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "./components/ui/field";
import { Input } from "./components/ui/input";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
const Form = () => {
  const setInvoiceData = useData().setData;
  const form = useForm<InvoiceFormValues>();

  return (
    <div className="h-screen overflow-scroll pr-2 overflow-x-hidden">
      <form onSubmit={form.handleSubmit((values) => setInvoiceData(values))}>
      <Card className="w-full mt-4">
        <h5>Provider Details</h5>

        <Controller
          name="providerName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Provider Name</FieldLabel>
              <Input {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="providerAddress"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>Provider Address</FieldLabel>
              <Input {...field} />
            </Field>
          )}
        />

        <Controller
          name="providerPhone"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>Provider Phone</FieldLabel>
              <Input {...field} />
            </Field>
          )}
        />

        <Controller
          name="providerEmail"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>Provider Email</FieldLabel>
              <Input type="email" {...field} />
            </Field>
          )}
        />
</Card>
      <Card className="w-full mt-4">
        <h5>User Details</h5>

        <Controller
          name="userId"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>User ID</FieldLabel>
              <Input {...field} />
            </Field>
          )}
        />

        <Controller
          name="recievedFrom"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>User Name</FieldLabel>
              <Input {...field} />
            </Field>
          )}
        />

        <Controller
          name="phone"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>Phone</FieldLabel>
              <Input {...field} />
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input type="email" {...field} />
            </Field>
          )}
        />

        <Controller
          name="address"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>Address</FieldLabel>
              <Input {...field} />
            </Field>
          )}
        />
      </Card>
      <Card className="w-full mt-4">
        <h5>Internet Plan Details</h5>

        <Controller
          name="subscriptionType"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>Subscription Type</FieldLabel>
              <select
                {...field}
                className="form-select"
              >
                <option value="">Select</option>
                <option value="Yearly">Yearly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
              </select>
            </Field>
          )}
        />

        <Controller
          name="renewalDate"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>Renewal Date</FieldLabel>
              <Input type="date" {...field} />
            </Field>
          )}
        />

        <Controller
          name="speed"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>Speed</FieldLabel>
              <Input {...field} />
            </Field>
          )}
        />

        <Controller
          name="totalAmount"
          control={form.control}
          render={({ field }) => (
            <Field>
              <FieldLabel>Total Amount</FieldLabel>
              <Input {...field} />
            </Field>
          )}
        />
      </Card>
       <Button className="mt-4" type="submit">Save Invoice</Button>
      </form>
    </div>
  )
}

export default Form;