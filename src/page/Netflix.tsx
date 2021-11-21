import MovieList from 'src/component/MovieList'

const Netflix = () => {
    return (
        <div>
            <header className="header">
                헤더헤더
            </header>
            <div className="main-container">
                {/* <div className="content">
                    <div className="background">
                        <div className="left">left</div>
                        <div className="right">right</div>
                    </div>
                    <div className="content-container">
                        Content..
                    </div>
                </div> */}
                {/* movie list */}
                <MovieList />
            </div>
        </div>
        
    )
}

export default Netflix;