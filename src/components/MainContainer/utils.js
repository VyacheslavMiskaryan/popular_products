const sortingRule = (field) => (a, b) => (a[field] > b[field] ? -1 : 1);

export default sortingRule;
