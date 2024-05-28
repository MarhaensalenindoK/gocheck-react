function Stats({ items }) {
    if (!items.length) {
        return <div className="footer">Kamu belum bikin catatan apa-apa</div>;
    }

    const total = items.length;
    const done = items.filter((item) => item.done).length;
    const percent = Math.round((done / total) * 100);

    return (
        <div className="footer">
            <span>
                {percent === 100
                    ? "Kamu telah melakukan semuanya"
                    : `
                        Kamu punya ${total} catatan dan baru ${done} yang diceklis (
                        ${percent}%)
                    `}
            </span>
        </div>
    );
}

export default Stats;
