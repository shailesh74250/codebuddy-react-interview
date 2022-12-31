function ThirdForm({ formData, setFormData, tAndC, setTAndC }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Country Code..."
        value={formData.countryCode}
        onChange={e => {
          setFormData({ ...formData, countryCode: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Phone Number..."
        value={formData.phoneNumber}
        onChange={e => {
          setFormData({ ...formData, phoneNumber: e.target.value });
        }}
      />
      <input
        type="checkbox"
        placeholder="Phone Number..."
        checked={tAndC}
        onChange={() => setTAndC(!tAndC)}
      />
    </div>
  );
}

export default ThirdForm;
