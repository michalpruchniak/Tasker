import React, { useEffect, useRef } from 'react';

export default function List({
    name,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    selected,
    options
}) {
    const list = useRef();

    useEffect(() => {
        if (isFocused) {
            list.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <select
                name={name}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={list}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                defaultValue={selected}
            >
            <option></option>
            {options.map(option => <option
                                        key={option.id}
                                        value={option.id}
                                    >
                                        {option.name} {option.id}
                                    </option>)}
            </select>
        </div>
    );
}
