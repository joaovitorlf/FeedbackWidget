export function Menu2(){
    return (
        <div className="bg-bluebg-500 flex justify-between sm:px-10 max-w-[1440px]">

            <div>
                <button className="">
                <a aria-label="Home" href="/">Home</a></button>
            </div>

            <nav className="items-end hidden md:flex">
                <div className="space-x-[27px] mr-8">
                    <a className="text-xs transition-colors border-b border-[transparent] hover:text-cosmic-cobalt hover:border-cosmic-cobalt font-body uppercase font-medium">Case Studies</a>
                    <a className="text-xs transition-colors border-b border-[transparent] hover:text-cosmic-cobalt hover:border-cosmic-cobalt font-body uppercase font-medium">Pricing</a>
                    <a className="text-xs transition-colors border-b border-[transparent] hover:text-cosmic-cobalt hover:border-cosmic-cobalt font-body uppercase font-medium">Blog</a>
                    <a className="text-xs transition-colors border-b border-[transparent] hover:text-cosmic-cobalt hover:border-cosmic-cobalt font-body uppercase font-medium">Docs</a>
                    <a className="text-xs transition-colors border-b border-[transparent] hover:text-cosmic-cobalt hover:border-cosmic-cobalt font-body uppercase font-medium">Careers</a>
                    <a className="text-xs transition-colors border-b border-[transparent] hover:text-cosmic-cobalt hover:border-cosmic-cobalt font-body uppercase font-medium">Log In</a>
                    </div>
                    <a className="inline-flex items-center justify-center">
                    <span>Sign Up</span></a>
            </nav>
        </div>
    )
}