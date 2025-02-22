import React from 'react'

export const ContactInfoItem = () =>
{
    return (
        <>
            <div className="d-flex m-0 justify-content-center">
                <i className={getIconClassName(label)}></i>
                <h6 className="mx-2">{capitalize(label)}</h6>
            </div>
            <p className="m-0">{value}</p>
        </>
    )
}
