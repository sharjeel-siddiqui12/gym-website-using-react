import { useState } from "react";
import Days from "./Days";
import List from "./List";

function ScheduleLayout() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <section className="px-6 py-32">
      <div className="container">
        <div className="flex flex-col gap-1">
          <Days selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

          <List selectedDay={selectedDay} />
        </div>
      </div>
    </section>
  );
}

export default ScheduleLayout;
