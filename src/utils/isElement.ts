// verify if the element is an HTMLElement
export const isHTMLElement = (element: unknown): element is HTMLElement => {
    if (!element) throw new Error("isHTMLElement did not receive any element.");
    return element instanceof HTMLElement;
};
export const isAnchorElement = (element: unknown): element is HTMLAnchorElement => {
    if (!element) throw new Error("isAnchorElement did not receive any element.");
    return element instanceof HTMLAnchorElement;
};
// verify if the element is a NodeList
export const isHTMLNodeList = (
    elementList: NodeListOf<HTMLElement> | unknown
): elementList is NodeListOf<HTMLElement> => {
    if (!elementList) throw new Error("isHTMLNodeList did not receive any element.");
    if (!(elementList instanceof NodeList))
        throw new Error("isHTMLNodeList did not receive a NodeList.");
    const elementArray = Array.from(elementList);
    if (!Array.isArray(elementArray))
        throw new Error("isNodeList could not convert the element to an array.");
    if (elementArray.length === 0) throw new Error("No elements found.");
    elementArray.forEach((node) => {
        if (!isHTMLElement(node))
            throw new Error("Element in elementArray is not an HTML element.");
    });
    return true;
};
