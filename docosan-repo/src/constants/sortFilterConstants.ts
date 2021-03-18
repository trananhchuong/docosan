export const SortDistanceConstants = {
    value: "distance",
    label: "Khoảng cách"
}

export const SortRatingConstants = {
    value: "rating",
    label: "Đánh giá"
}


export const FilterLangVN = {
    value: "vi",
    label: "Tiếng Việt"
}

export const FilterLangEnglish = {
    value: "en",
    label: "English"
}

export const FilterLangFrancaise = {
    value: "fr",
    label: "Francaise"
}

export const MapLanguage = (languageKey: string) => {
    switch (languageKey) {
        case FilterLangVN.value:
            return FilterLangVN.label;
        case FilterLangEnglish.value:
            return FilterLangEnglish.label;
        case FilterLangFrancaise.value:
            return FilterLangFrancaise.label;
        default:
            return null;
    }
}


export const MapSort = (sortKey: string) => {
    switch (sortKey) {
        case SortDistanceConstants.value:
            return SortDistanceConstants.label;
        case SortRatingConstants.value:
            return SortRatingConstants.label;
        default:
            return null;
    }
}