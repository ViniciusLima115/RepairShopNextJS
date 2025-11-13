import { getCustomers } from "../../../../lib/queries/getCustumers";
import { BackButton } from "../../../../components/BackButton";
import * as Sentry from "@sentry/nextjs";

export default async function CustomerFormPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined }
}) {
    try {
        const { customerId } = searchParams;

        // Edit customer form
        if (customerId) {
            const customer = await getCustomers(Number(customerId));
            
            if (!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">
                            Customer ID #{customerId} not found
                        </h2>
                        <BackButton title="Go Back" variant="outline" />
                    </>
                );
            }

            console.log(customer);
            // put customer form component here

        } else {
            // New customer form
        }

    } catch (error) {
        if (error instanceof Error) {
            Sentry.captureException(error);
            throw error;
        }
    }
}