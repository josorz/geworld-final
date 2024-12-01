'use server'
 
export async function createEngagement(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); // Convert to an object
    await fetch('http://localhost:3000/api/engagement-calc', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json())
    .then((data) => {
      if (data.success) {
        // redirect(`/engagement-calc/result`)
      }
    })
}