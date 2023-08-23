const Errors = ({error}) => {


    return(
        <div>
            {error && <h3> Something went wrong.Check your city </h3>}
        </div>
    )
}

export { Errors };
