export const PlaceholderRow = ({ row }) => {
  const {
    numberOfColumns,
    titleColumnOne,
    textColumnOne,
    titleColumnTwo,
    textColumnTwo,
    titleColumnThree,
    textColumnThree,
  } = row

  const allColumns = [
    titleColumnOne && { title: titleColumnOne, text: textColumnOne },
    titleColumnTwo && { title: titleColumnTwo, text: textColumnTwo },
    titleColumnThree && { title: titleColumnThree, text: textColumnThree },
  ]

  const shouldRenderColumn = allColumns.lengh !== 0

  return (
    shouldRenderColumn && (
      <div className="placeholder-wrapper">
        {allColumns.slice(0, numberOfColumns).map((column, index) => {
          return (
            <div
              key={column?.title + numberOfColumns + index}
              className={`placeholder-col-${numberOfColumns}`}>
              <h3>{column?.title}</h3>
              <p>{column?.text}</p>
            </div>
          )
        })}
      </div>
    )
  )
}
