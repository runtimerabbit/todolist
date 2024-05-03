"use client";
function FormInput ({labelName, htmlFor, name, type, onChange, value}: {labelName: string, htmlFor: string, name: string, type: string, onChange: any, value: any}){
    return (
        <div>
            <label htmlFor={htmlFor} className="block text-sm font-medium leading-6 text-gray-900">{labelName}</label>
            <div className="mt-2">
                <input name={name} type={type} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange = {evt => onChange (evt.target.value)} value = {value} />
            </div>
        </div>
    );
}

export {FormInput}