type Props = {
  params: {
    id: string;
  };
};

// TODO: create movie page layout
export default function Movie({ params }: Props) {
  return (
    <main>
      <div>Movie #{params.id}</div>
    </main>
  );
}
