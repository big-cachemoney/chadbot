import { useState } from "react";
import { client } from "../utils/axiosInstance";

export const useFormUpload = <T extends Record<string, any>>(
    initialValues: T,
    onSuccessCallback?: (data: any) => void
) => {
    const [formData, setFormData] = useState<T>(initialValues);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Handle input changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: e.target.type === "number"
                ? parseFloat(value) || 0
                : value,
        }));
    };

    const resetForm = () => {
        setFormData(initialValues);
        setError(null);
    };

    const handleSubmit = () => {
        setLoading(true);
        setError(null);
        client
            .post("/users", formData)
            .then((response) => {
                console.log("Form submitted successfully:", response.data);

                // Call the onSuccessCallback if provided
                if (onSuccessCallback) {
                    onSuccessCallback(response.data);
                }
            })
            .catch((err) => {
                setError(err.response?.data?.message || "An error occurred while submitting the form.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        formData,
        handleChange,
        resetForm,
        handleSubmit,
        loading,
        error,
    };
};