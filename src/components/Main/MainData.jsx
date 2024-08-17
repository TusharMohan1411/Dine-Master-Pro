

// eslint-disable-next-line react/prop-types
export default function MainData({ children }) {
    return (
        <div className="products-cat-cont-main mt-2 md:pt-2 px-2 md:px-5 pb-7 flex 
    flex-wrap gap-7 rounded-md overflow-y-scroll overflow-x-hidden scrollable-element">
            {children}
        </div>
    )
}
