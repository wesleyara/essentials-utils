type AnchorKeysType<TArray> = keyof TArray | (keyof TArray)[];

export interface RemoveDuplicatesOptions<TArray = unknown> {
  isObject: boolean;
  anchorKeys: AnchorKeysType<TArray>;
  counts: boolean;
}
