const style = {
    fill:"var(--uniq-text)",
    fontFamily: "Luxurious Script",
    fontSize: "64px",
}


export const Logo = () => {
    return (
        <>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width="186px"
                height="77px"
                viewBox='100 100'
                fill='none'
                style={{display:"flex"}}
            >
            
            <text x="10" y="50" style={style}>Moviehub</text>

            </svg>
        </>
    );
};