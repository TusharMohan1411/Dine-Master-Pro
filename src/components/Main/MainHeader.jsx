

// eslint-disable-next-line react/prop-types
export default function MainHeader({ PageHeading, children }) {
    return (
        <div className="flex justify-between h-14 px-5">
            <h1 className="text-4xl mt-3 font-bold mb-4 capitalize">{PageHeading}</h1>
            {children}
        </div>
    )
}
