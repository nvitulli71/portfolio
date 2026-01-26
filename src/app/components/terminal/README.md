# Terminal Component

A reusable terminal-style component for displaying content with macOS-style window controls.

## Usage

### Basic Usage

```html
<app-terminal title="filename">
  <p>Your content here</p>
</app-terminal>
```

### With Custom Max Width

```html
<app-terminal title="my-script" [maxWidth]="900">
  <p>Your content here</p>
</app-terminal>
```

### Without Centering

```html
<app-terminal title="log" [centered]="false">
  <p>Your content here</p>
</app-terminal>
```

## Inputs

| Input | Type | Default | Description |
|-------|------|----------|-------------|
| `title` | string | 'terminal' | The title displayed in the terminal header (automatically appends .md) |
| `maxWidth` | string \| number | '800px' | Maximum width of the terminal |
| `centered` | boolean | true | Whether to center the terminal horizontally with margins |

## Examples

### Stats Display
```html
<app-terminal title="stats">
  <div class="stats-content">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">8+</div>
        <div class="stat-label">Years Coding</div>
      </div>
    </div>
  </div>
</app-terminal>
```

### Form Content
```html
<app-terminal title="contact">
  <form [formGroup]="myForm">
    <div class="form-group">
      <label>Name</label>
      <input type="text" formControlName="name" />
    </div>
  </form>
</app-terminal>
```

## Styling

The component uses CSS variables for theming:
- `--bg-card` - Terminal background
- `--terminal-header` - Header background
- `--terminal-border` - Border color
- `--text-secondary` - Title color
- `--accent-blue` - Hover accent color

Content inside the terminal body will inherit the terminal's mono font styling by default.
