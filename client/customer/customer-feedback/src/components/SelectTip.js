export default function SelectTip() {
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <p> Give a tip! </p>
            
            <select name="selectedTipAmount">
                
                <option value="none"> none </option>
                <option value="$2"> $2 </option>
                <option value="$5"> $5 </option>
                <option value="$10"> $10 </option>

            </select>

        </form>
    )
}
