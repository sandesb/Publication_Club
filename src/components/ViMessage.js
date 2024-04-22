const ViMessage = (props) => {
    return (
        <div>
        {props.message && 
        <div className="message">
            <p>{props.message}</p>
        </div>
}
        </div>
    );
};

export default ViMessage;