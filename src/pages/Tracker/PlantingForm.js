function PlantingForm({ id }) {
    return (
        <div className="container mt-3 mb-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="plantId" className="form-label form-label-lg">Plant ID</label>
                    <input type="text" className="form-control" id="plantId" value={id} disabled />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select className="form-select" id="status" required>
                        <option value="planted">Vacant</option>
                        <option value="damaged">Planted</option>
                        <option value="vacant">Damaged</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="size" className="form-label">Size</label>
                    <input type="text" className="form-control" id="size" placeholder="e.g. 2m x 2m" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="datePlanted" className="form-label">Date Planted</label>
                    <input type="date" className="form-control" id="datePlanted" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="area" className="form-label">Area</label>
                    <input type="text" className="form-control" id="area" value="Botolan, Zambales" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
}

export default PlantingForm;