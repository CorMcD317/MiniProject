const SUPABASE_URL = "https://cvjdmccwopblebapnbcq.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2amRtY2N3b3BibGViYXBuYmNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMzE3ODUsImV4cCI6MjA5MTgwNzc4NX0.muiYFkCNxojvIwlhx-LhDubRUK7OpLpp0e5zwRznInE";
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


async function loadBosses() {

    const { data, error } =
        await supabase
            .from('boss_stats')
            .select('boss_name, health_points, damage')
            .eq('id', 3)

    if (error) {
        console.error(error)
        return
    }

    const tbody =
        document.querySelector('#ChorusTable tbody')

    tbody.innerHTML = ''

    data.forEach(boss => {

        const row =
            document.createElement('tr')

        row.innerHTML = `
            <td>${boss.health_points}</td>
            <td>${boss.damage}</td>
            <td>${boss.mobility}</td>
        `

        tbody.appendChild(row)

    })
}

loadBosses()