const Timer = ({ hours, minutes, seconds }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <p>Timer</p>
            <div style={{ fontSize: '100px' }}>
                <span>{hours}</span>:<span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
        </div>
    )
}

export default Timer
