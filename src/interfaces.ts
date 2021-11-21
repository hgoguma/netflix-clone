export interface ITask {
	taskName: string;
}

export interface TmdbData {
	page: string;
	results: Array<TmdbItem>;
	total_pages: number;
	total_results: number;
}

export interface TmdbItem {
	adult: boolean;
	backdrop_path: string;
	original_language: string;
	original_title: string;
	poster_path: string;
	title: string;
	name: string;
	overview: string;
	id: string;
	media_type: string;
}
