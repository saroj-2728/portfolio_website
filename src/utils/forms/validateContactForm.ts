interface FormData {
    from_name: string;
    to_name: string;
    email: string;
    message: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = (formData: FormData) => {
    const newErrors: Partial<FormData> = {};

    if (!formData.from_name.trim()) newErrors.from_name = 'Please enter your name.';
    else if (formData.from_name.trim().length < 3) newErrors.from_name = 'Name must be at least 3 characters long.';

    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address.';

    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters long.';

    return {
        isValid: Object.keys(newErrors).length === 0,
        errors: newErrors
    }
};

export default validateForm;