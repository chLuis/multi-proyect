export default function ToPortfolio() {
    return(
        <div className="fixed top-2 right-2 border-b-2 ps-32 border-b-transparent hover:border-b-white hover:ps-0 duration-200">
            <a href="https://chluis-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex gap-1">
                <span>my Porfolio</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-briefcase-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                </svg>
            </a>
        </div>
    )
}