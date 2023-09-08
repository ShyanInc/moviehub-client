type Props = {
  params: {
    id: string;
  };
};

export default function Movie({ params }: Props) {
  return (
    <main>
      <div>Movie #{params.id}</div>
    </main>
  );
}
