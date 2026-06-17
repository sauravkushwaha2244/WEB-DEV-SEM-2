import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api/assignments";

function App() {
  const [page, setPage] = useState("student");
  const [form, setForm] = useState({
    studentName: "",
    rollNo: "",
    subject: ""
  });
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(API);

    if (!res.ok) {
      throw new Error("Failed to load assignments");
    }

    setData(await res.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("studentName", form.studentName);
    fd.append("rollNo", form.rollNo);
    fd.append("subject", form.subject);
    fd.append("assignment", file);

    const res = await fetch(`${API}/upload`, {
      method: "POST",
      body: fd
    });

    if (!res.ok) {
      throw new Error("Failed to upload assignment");
    }

    const payload = await res.json();
    setResult(payload.assignment);
    await fetchData();
  };

  const update = async (id, status) => {
    const res = await fetch(`${API}/${id}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status })
    });

    if (!res.ok) {
      throw new Error("Failed to update status");
    }

    await fetchData();
  };

  return (
    <div>
      <nav className="nav">
        <h2>Smart Assignment</h2>
        <div>
          <button onClick={() => setPage("student")}>Student</button>
          <button onClick={() => setPage("teacher")}>Teacher</button>
        </div>
      </nav>

      {page === "student" && (
        <div className="box">
          <h2>Upload Assignment</h2>

          <form onSubmit={submit}>
            <input name="studentName" placeholder="Name" onChange={handleChange} required />
            <input name="rollNo" placeholder="Roll No" onChange={handleChange} required />
            <input name="subject" placeholder="Subject" onChange={handleChange} required />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
            <button type="submit">Submit</button>
          </form>

          {result && (
            <div className="result">
              <p>AI: {result.aiScore}%</p>
              <p>Plagiarism: {result.plagiarismScore}%</p>
              <p>Grammar: {result.grammarScore}%</p>
              <h3>{result.status}</h3>
            </div>
          )}
        </div>
      )}

      {page === "teacher" && (
        <div className="box">
          <h2>Teacher Dashboard</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll</th>
                <th>Subject</th>
                <th>AI</th>
                <th>Plagiarism</th>
                <th>Status</th>
                <th>Change</th>
              </tr>
            </thead>

            <tbody>
              {data.map((d) => (
                <tr key={d._id}>
                  <td data-label="Name">{d.studentName}</td>
                  <td data-label="Roll">{d.rollNo}</td>
                  <td data-label="Subject">{d.subject}</td>
                  <td data-label="AI">{d.aiScore}%</td>
                  <td data-label="Plagiarism">{d.plagiarismScore}%</td>
                  <td data-label="Status">{d.status}</td>
                  <td data-label="Change">
                    <select onChange={(e) => update(d._id, e.target.value)}>
                      <option>Safe</option>
                      <option>Needs Review</option>
                      <option>High Risk</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
