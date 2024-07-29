import "./Loader.css"

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader_animation">
                <div className="loader_circle_items">
                    <div className="loader_circle_item">
                        <div className="loader_circle"></div>
                        <div className="loader_circle_shadow"></div>
                    </div>
                    <div className="loader_circle_item">
                        <div className="loader_circle"></div>
                        <div className="loader_circle_shadow"></div>
                    </div>
                    <div className="loader_circle_item">
                        <div className="loader_circle"></div>
                        <div className="loader_circle_shadow"></div>
                    </div>
                </div>

                <div className="loader_description"><span>Loading...</span></div>
            </div>
        </div>
    )
}

export default Loader;