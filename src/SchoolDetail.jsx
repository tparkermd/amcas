export default function SchoolDetail(props) {
    const {
        title,
        details,
    } = props;

    return (
        <div>
            <strong>{title}</strong>
            <br />
            {`${details}`}
        </div>
    )
}