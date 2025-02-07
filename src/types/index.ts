export type TabProps = {
    value: string;
    purchases: Purchase[];
    handleChange: (event: React.SyntheticEvent, newValue: string) => void;
};

export type Purchase = {
    orderId: string;
    seller: string;
    lastActivity: string;
    status: string;
};

export type ToggleCollectionLimitProps = {
    open: boolean;
    anchorEl: null | HTMLElement;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    onClose: (event: React.MouseEvent<HTMLElement>) => void;
    limit: string | null;
};

export type Collection = {
    id: string;
    title: string;
    artist: string;
    year: string;
    thumbnail: string;
    country: string;
    icon: string;
    media: string;
}[];

export type FetchCollectionProps = {
    limit: string;
};
