import { Link, useLoaderData } from "react-router-dom";

export default function LessonsPage() {
  const lesson_items = useLoaderData() as DDB.LessonItem[];

  const lesson_els = [];
  for (const lesson_item of lesson_items) {
    const id = lesson_item.id.S;
    const summary = lesson_item.summary?.S;

    lesson_els.push(
      <Link className="card container flex-row text-decoration-none" key={id} to={`/lessons/${id}`}>
        <div className="card-body">
          {summary ? (
            <>
              <h5 className="card-title">{id}</h5>
              <p className="card-text text-dark">{summary}</p>
            </>
          ) : (
            <h4 className="card-title">{id}</h4>
          )}
        </div>
      </Link>
    );
  }

  return (
    <main className="align-items-center d-flex flex-column gap-4 py-5">
      <h1 className="mb-2">Lessons</h1>
      <div className="w-50">{lesson_els}</div>
    </main>
  );
}
