import { seriesApi } from "@/api/api";
import Series from "@/components/Series";
import { Item } from "@/components/Item";

type Props = {
    params: {
        id: string,
    }
}

export default async function MoviePage({ params }: Props) {
    const seriesInfo = await seriesApi.getSeriesById(params.id.toString());

    return (
        <main>
            <Item itemInfo={seriesInfo} />
        </main>
    );
}
