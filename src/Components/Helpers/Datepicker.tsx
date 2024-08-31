import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomDatePickerProps {
    id?: string;
    name?: string;
    selectedDate?: Date;  // Adjusted type here
    onChange?: (date: Date | null) => void;  // Adjusted type here
    placeholderText?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    id,
    name,
    selectedDate,
    onChange,
    placeholderText,
}) => {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </div>
            <DatePicker
                id={id}
                name={name}
                selected={selectedDate}
                onChange={(date: Date | null) => onChange?.(date)} 
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholderText={placeholderText}
            />
        </div>
    );
};

export default CustomDatePicker;
