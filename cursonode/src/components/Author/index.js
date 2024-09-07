
function Author({ name, courses}) {
    return (
        <>
            <p>Author: {name}</p>
            <p>Curso: react</p>
            <p>Preço: {courses.price}</p>
            <p>Carga Horária: {courses.workload}</p>
        </>)
}

export default Author;