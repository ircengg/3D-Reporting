const Loader = ({ loading }) => {
    const active = loading ? 'block' : 'none';
    return (
        <div style={{ display: active }} className='loader-overlay '>
            <div className='loader-content'>
                <div className='loader'>
                </div>
            </div>
        </div>
    )
}


export default Loader;