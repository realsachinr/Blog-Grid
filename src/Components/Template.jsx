import React from "react";

function CardHeader({ category }) {
  return (
    <header className="bg-[#F1B10F] font-bold flex items-center justify-center py-1 px-4 mb-2 rounded-lg">
      {category}
    </header>
  );
}

function CardBody({ image, date, title }) {
  return (
    <div>
      <img src={image} alt="" className="h-auto rounded-md" />
      <div className="pt-9 space-y-3">
        <span className="bg-[#EA4C62] py-1 px-2 rounded-full text-white font-bold">
          {date}
        </span>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </div>
  );
}

function CardFooter() {
  return (
    <footer className="mt-5">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Read More
      </button>
    </footer>
  );
}

function Card({ item }) {
  return (
    <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg">
      <div className="flex items-center">
        <CardHeader category={item.category} />
      </div>
      <CardBody image={item.image} date={item.date} title={item.title} />
      <CardFooter />
    </div>
  );
}

function Template({ search }) {
  return (
    <div className="bg-[#D3E3FD] py-20 w-full overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {search.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Template;
