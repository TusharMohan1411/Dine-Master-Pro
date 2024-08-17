

// eslint-disable-next-line react/prop-types
export default function MainSection({ children }) {
    return (
        <section className="h-full pb-5 flex flex-col grow">
            {children}
        </section>
    )
}
